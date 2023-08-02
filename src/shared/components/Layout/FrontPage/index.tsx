import {
    StyledFrontPageContainer,
    HeadText,
    SearchBar,
    TopPart,
    BottomPart,
    QuoteText,
    TopFrontPage,
    BottomFrontPage,
    MainContainer,
    FilterContainer,
    VenueListContainer,
    FilterTitle
} from './FrontPage.styled.tsx';
import { SearchField } from "../SearchField";
import { SearchButton } from "../SearchButton";
import { DropDownItem } from "../DropDownItem";
import { VenueTable } from "../VenueTable";

export const FrontPage = () => {
    return (
        <StyledFrontPageContainer>
            <TopFrontPage>
                <TopPart>
                    <HeadText>
                        Find your place and experience it together.
                    </HeadText>
                </TopPart>
                <BottomPart>
                    <SearchBar>
                        <SearchField name={"location"}/>
                        <SearchField name={"venue"}/>
                        <SearchField name={"pdsadlasdsa"}/>
                        <SearchField name={"location"}/>
                        <SearchField name={"location"}/>
                    </SearchBar>
                    <QuoteText>
                        I don’t want to be that specific
                    </QuoteText>
                    <SearchButton />
                </BottomPart>
            </TopFrontPage>
            <BottomFrontPage>
                <MainContainer>
                    <FilterContainer>
                        <FilterTitle>
                            FILTERS
                        </ FilterTitle>
                        <DropDownItem />
                        <DropDownItem />
                        <DropDownItem />
                        <DropDownItem />
                        <DropDownItem />
                    </FilterContainer>
                    <VenueListContainer>
                        <VenueTable />
                    </VenueListContainer>
                </MainContainer>
            </BottomFrontPage>
        </StyledFrontPageContainer>
    );
};